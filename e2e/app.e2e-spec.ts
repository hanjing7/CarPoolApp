import { TaskListPage } from './app.po';

describe('task-list App', () => {
  let page: TaskListPage;

  beforeEach(() => {
    page = new TaskListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
