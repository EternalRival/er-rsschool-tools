class App {
  render() {
    const main = App.createElement('main', 'main');
    const form = App.createForm('form');
    const nickname = App.createInput('nickname');
    const course = App.createInput('course');
    const task = App.createInput('task');
    const submit = App.createElement('submit', 'button');
    const result = App.createElement('result', 'ul');

    document.body.append(main);
    main.append(form, result);
    form.append(nickname.label, course.label, task.label, submit);
    nickname.label.prepend('GitHub nickname: ');
    course.label.prepend('Course: ');
    task.label.prepend('Taskname: ');
    submit.append('Search');

    Object.assign(this, { form, nickname, course, task, submit, result });
    return this;
  }

  run() {
    const { nickname, course, task, submit, result } = this;
    submit.addEventListener('click', () => {
      App.buildLinks(result, ...[nickname, course, task].map((v) => v.input.value));
    });
    return this;
  }

  static async buildLinks(el, nickname, course, task) {
    // const templateLink = 'https://rolling-scopes-school.github.io/onyxgeek-JSFE2023Q1/shelter/main/'
    const templateLink = `https://rolling-scopes-school.github.io/${nickname.toLowerCase()}-${course.toUpperCase()}/${task.toLowerCase()}`;
    const options = [
      '/index.html',
      '/main.html',
      '/pages/index.html',
      '/pages/main.html',
      '/pages/main',
      '/pages/main/index.html',
      '/pages/main/main.html',
    ].map((v) => templateLink + v);

    el.replaceChildren();
    const links = [templateLink, ...options].map((v) => {
      const li = App.createElement('result-item', 'li');
      const a = App.createElement('link', 'a');
      el.append(li);
      li.append(a);
      a.append(v);
      return a;
    });

    links.forEach(async (a) => {
      const status = await App.getStatus(a.textContent);
      if (status === 200) {
        a.href = a.textContent;
        a.target = '_blank';
      }
    });
  }

  static async getStatus(url) {
    const { status } = await fetch(url);
    return status;
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
