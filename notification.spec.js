const { Notification } = require('./notification');

describe('Notification component', () => {
  let notification;

  beforeEach(() => {
    notification = new Notification('message', { duration: 1000, type: 'success' });
    notification.show(document.body);
  });

  afterEach(() => {
    notification.destroy();
    notification = null;
  });

  test('should be rendered in the document', () => {
    expect(notification.element).toBeInTheDocument();
  });

  test('should be visible', () => {
    expect(notification.element).toBeVisible();
  });

  test('should show a message', () => {
    expect(notification.element).toHaveTextContent('message');
  });

  test('should have an ability to set a type of message', () => {
    expect(notification.element).toHaveClass('success');
  });

  test('should have ability to be destroyed', () => {
    notification.destroy();

    expect(notification.element).not.toBeInTheDocument();
  });

  test('should be removed after time defined in duration property', () => {
    notification.remove();

    jest.useFakeTimers();

    notification.show(document.body);

    jest.advanceTimersByTime(1000);

    expect(notification.element).not.toBeInTheDocument();

    jest.useRealTimers();
  });
});
