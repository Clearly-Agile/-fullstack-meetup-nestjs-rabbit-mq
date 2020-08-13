import { Controller, Get, Logger } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Controller('notifications')
export class NotificationsController {

    readonly #logger: Logger = new Logger('NotificationsController');


    constructor(private readonly connection: AmqpConnection) {

    }

  @Get()
  public async get(): Promise<any> {
    this.#logger.verbose('Sending notification...');
    
    await this.connection.publish('meetup.notifications', 'meetup.notifications.create', { 
        _id: 1234465,
        firstName: 'Zev',
        lastName: 'Butler',
    });

    this.#logger.verbose('Sent!');
    return {success: true};
  }
}
