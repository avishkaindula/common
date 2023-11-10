import { Subjects } from "./subjects";

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
    // We are adding the userId property to the event data because we want to
    // make sure that the user who is updating the ticket is the same user who
    // created the ticket. We will use this property to implement an optimistic
    // concurrency control mechanism.
  };
}
