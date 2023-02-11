import { Publisher, Subjects, TicketUpdatedEvent } from '@charlie059/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
