import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

import { NotificationHandlerService } from './notification-handler.service';

@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule, {
    exchanges: [
      {
          name: 'meetup.notifications',
          type: 'topic'
        }
      ],
      uri: ['amqp://guest:guest@localhost:5672']
    }),
  ],
  providers: [NotificationHandlerService],
})
export class NotificationHandlerModule {}
