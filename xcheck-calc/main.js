class App {
  DEFAULT_MAX = 100;
  scoreMax;
  scoreDesired;
  scoreInputs;
  scoreResult;
  scoreAppealable;

  render() {
    const main = App.createElement('main', 'main');
    const scoreForm = App.createForm('score');
    const scoreMax = App.createInput('score');
    const scoreDesired = App.createInput('score');
    const scoreInputs = Array.from({ length: 4 }, (_, i) => {
      const node = App.createInput('score');
      node.label.prepend(`Reviewer ${i + 1}:`);
      return node;
    });
    const scoreResult = App.createElement('score__result', 'div');
    const scoreAppealable = App.createElement('score__appealable', 'div');

    [scoreMax, scoreDesired, ...scoreInputs].forEach((el) => {
      Object.assign(el.input, { type: 'number', placeholder: '<empty>', min: 0, max: this.DEFAULT_MAX });
    });
    scoreMax.input.max = 999;
    scoreMax.input.value = this.DEFAULT_MAX;
    scoreDesired.input.value = 0;

    document.body.append(main);
    main.append(scoreForm, scoreResult, scoreAppealable);
    scoreForm.append(...[scoreMax, scoreDesired, ...scoreInputs].map(({ label }) => label));
    scoreMax.label.prepend('Максимум:');
    scoreDesired.label.prepend('Желаемое:');

    Object.assign(this, { scoreMax, scoreDesired, scoreInputs, scoreResult, scoreAppealable });
    return this;
  }

  run() {
    const max = this.scoreMax.input;
    const desired = this.scoreDesired.input;
    const inputs = this.scoreInputs.map((item) => item.input);

    [max, desired, ...inputs].forEach((el) => {
      el.addEventListener('input', (e) => {
        const { value, max } = e.target;
        e.target.value = (+value <= +max ? value : max).slice(-3);
      });
    });

    max.addEventListener('input', (e) => {
      [desired, ...inputs].forEach((el) => (el.max = e.target.value || 0));
      this.renderAppealable();
    });

    desired.addEventListener('input', () => this.renderAppealable());

    inputs.forEach((el) => {
      el.addEventListener('input', () => {
        const scoreList = inputs
          .filter(({ value }) => value !== '')
          .map(({ value }) => +value)
          .sort((a, b) => b - a)
          .slice(0, 3);
        this.renderScoreResult(scoreList);
        this.renderAppealable();
      });
    });

    this.renderScoreResult([]);
    this.renderAppealable();
    return this;
  }

  renderScoreResult(scoreList) {
    this.scoreResult.textContent = App.calcResultScore(scoreList) || 0;
  }

  renderAppealable() {
    const max = this.scoreMax.input.value;
    const desired = this.scoreDesired.input.value;
    const result = this.scoreResult.textContent;

    const isAppealable = desired - result >= max * 0.1;

    this.scoreAppealable.textContent = `${isAppealable ? 'Можно' : 'Нельзя'} подать апелляцию`;
    this.scoreAppealable.style = `color:${isAppealable ? 'green' : 'red'}`;
  }

  static calcResultScore(arr) {
    const sum = arr.reduce((sum, score) => sum + score, 0);
    return Math.round(sum / arr.length);
  }

  static createElement(className, tag) {
    const el = document.createElement(tag);
    el.className = className;
    return el;
  }

  static createInput(classPrefix) {
    const label = this.createElement(`${classPrefix}__label`, 'label');
    const input = this.createElement(`${classPrefix}__input`, 'input');
    label.append(input);
    return { label, input };
  }

  static createForm(classPrefix) {
    const form = this.createElement(classPrefix, 'form');
    const fieldset = this.createElement(`${classPrefix}__fieldset`, 'fieldset');
    const legend = this.createElement(`${classPrefix}__legend`, 'legend');
    form.append(fieldset);
    fieldset.append(legend);
    legend.append('Введите данные');
    return fieldset;
  }
}

const app = new App();
app.render().run();
