using TesteDti.API.Entities;

namespace TesteDti.API.Persistence
{
    public class ReminderDbContext
    {
        public List<Reminder> Reminder { get; set; }

        public ReminderDbContext()
        {
            Reminder = new List<Reminder>();
        }
    }
}