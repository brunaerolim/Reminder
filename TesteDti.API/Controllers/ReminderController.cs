using Microsoft.AspNetCore.Mvc;
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
    }
}
