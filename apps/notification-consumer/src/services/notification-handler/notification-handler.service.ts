import { Injectable, Logger } from '@nestjs/common';
import { RabbitRPC, Nack } from '@golevelup/nestjs-rabbitmq';

@Injectable()   
export class NotificationHandlerService {
     
    @RabbitRPC({
        exchange: 'meetup.notifications',
        routingKey: 'meetup.notifications.create',
        queue: 'meetup_notifications'
      })
      public async receive(msg: {}): Promise<any> {
        return new Nack(false);
      }
}                   