import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsController } from './notifications.controller';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
    exchanges: [
      {
          name: 'meetup.notifications',
          type: 'topic'
        }
      ],
      uri: ['amqp://guest:guest@localhost:5672']
    }),
  ],
  controllers: [AppController, NotificationsController],
  providers: [AppService],
})
export class AppModule {}
