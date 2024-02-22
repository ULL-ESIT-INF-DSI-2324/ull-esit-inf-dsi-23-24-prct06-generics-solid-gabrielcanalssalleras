// class that allows notifications by email to be sent
export class EmailService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

// class that allows notifications by SMS to be sent
export class ShortMessageService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

interface NotificationService {
  notify(message: string): void;
}

export class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');