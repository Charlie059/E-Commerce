import { Publisher, Subjects, TicketCreatedEvent } from '@charlie059/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
