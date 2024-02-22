import "mocha";
import { expect } from "chai";
import { EmailService } from '../../src/ejercicio-5/index';
import { ShortMessageService } from '../../src/ejercicio-5/index';
import { Notifier } from '../../src/ejercicio-5/index';
import sinon from 'sinon';

describe('File Manager', () => {
  const emailService: EmailService = new EmailService();
	const shortMessageService: ShortMessageService = new ShortMessageService();
	const emailNotifier: Notifier = new Notifier(emailService);

	beforeEach(() => {
		sinon.restore();
	});

  it('Se crea la instancia del servicio de email', () => {
		expect(emailService).to.be.instanceOf(EmailService);
	});

  it('Se crea la instancia del servicio de SMS', () => {
		expect(shortMessageService).to.be.instanceOf(ShortMessageService);
	});

  it('Se crea la instancia del notificador de email', () => {
		expect(emailNotifier).to.be.instanceOf(Notifier);
	}),
  
  it('Se puede notificar por email', () => {
		const consoleLog = sinon.spy(console, 'log');
		emailNotifier.sendNotification('Hello World!');
		expect(consoleLog.calledOnce).to.be.true;
		expect(consoleLog.calledWith('Sending notification by email: Hello World!')).to.be.true;
	}),

	it('Se puede notificar por SMS', () => {
		const shortMessageNotifier: Notifier = new Notifier(shortMessageService);
		const consoleLog = sinon.spy(console, 'log');
		shortMessageNotifier.sendNotification('Hello World!');
		expect(consoleLog.calledOnce).to.be.true;
		expect(consoleLog.calledWith('Sending notification by SMS: Hello World!')).to.be.true;
	});

	it('Se puede notificar con la clase base', () => {
		const consoleLog = sinon.spy(console, 'log');
		const notifier: Notifier = new Notifier(emailService);
		notifier.sendNotification('Hello World!');
		expect(consoleLog.calledOnce).to.be.true;
		expect(consoleLog.calledWith('Sending notification by Notifier: Hello World!')).to.be.true;
	});
	
});
