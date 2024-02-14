namespace TesteDti.API.Entities
{
    public class Reminder
    {
        public Reminder()
        {
            IsDeleted = false;
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public bool IsDeleted { get; set; }

    }
}
