using Microsoft.AspNetCore.Mvc;
using TesteDti.API.Entities;
using TesteDti.API.Persistence;

namespace TesteDti.API.Controllers
{

    [Route("api/reminder")]
    [ApiController]

    public class ReminderController : Controller
    {
        private readonly ReminderDbContext _context;
        public ReminderController(ReminderDbContext context)
        {
            _context = context;
        }

        // api/dev-events GET

        [HttpGet]
        public IActionResult GetAll()
        {
            var reminders = _context.Reminder.Where(d => !d.IsDeleted).ToList();

            return Ok(reminders);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var reminders = _context.Reminder.SingleOrDefault(d => d.Id == id);

                if (reminders == null) 
                {
                    return NotFound();
                
                }

            return Ok(reminders);

        }

        [HttpPost]
        public IActionResult Post(Reminder reminders)
        {
            _context.Reminder.Add(reminders);

            return CreatedAtAction(nameof(GetById), new { id = reminders.Id }, reminders);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, Reminder input)
        {
            var reminders = _context.Reminder.SingleOrDefault( d =>  d.Id == id);

            if (reminders == null)
            {
                return NotFound();
            }

            reminders.Update(input.Name, input.Date);

            return NoContent();

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var reminders = _context.Reminder.SingleOrDefault(d => d.Id == id);

                if (reminders == null)
                {
                    return NotFound();
                }

                reminders.Delete();

            return NoContent();
        }
    }
}
