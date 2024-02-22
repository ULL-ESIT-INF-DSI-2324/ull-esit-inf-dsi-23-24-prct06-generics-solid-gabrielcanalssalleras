/**
 * Clase que representa un servicio de notificación por correo electrónico.
 */
export class EmailService {
 /**
  * Método para enviar una notificación por correo electrónico.
  * @param message - El mensaje a enviar.
  */
 notify(message: string): void {
  console.log(`Sending notification by email: ${message}`);
 }
}

/**
 * Clase que representa un servicio de notificación por SMS.
 */
export class ShortMessageService {
 /**
  * Método para enviar una notificación por SMS.
  * @param message - El mensaje a enviar.
  */
 notify(message: string): void {
  console.log(`Sending notification by SMS: ${message}`);
 }
}

/**
 * Interfaz que representa un servicio de notificación.
 */
interface NotificationService {
 /**
  * Método para enviar una notificación.
  * @param message - El mensaje a enviar.
  */
 notify(message: string): void;
}

/**
 * Clase que representa un notificador.
 */
export class Notifier {
 /**
  * Constructor de la clase Notifier.
  * @param notificationService - Una instancia de NotificationService para enviar notificaciones.
  */
 constructor(private notificationService: NotificationService) {}

 /**
  * Método para enviar una notificación.
  * @param message - El mensaje a enviar.
  */
 sendNotification(message: string): void {
  this.notificationService.notify(message);
 }
}

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification("Hello World!");

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification("Hello World!");
