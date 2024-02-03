using CA.Models;
using CA.Services;
using Microsoft.AspNetCore.Mvc;

namespace CA.Controllers;

[ApiController]
[Route("[controller]")]
public class PersonController : ControllerBase
{
    private readonly IPersonService _personService;

    public PersonController(IPersonService personService)
    {
        _personService = personService;
    }

    [HttpGet]
    public ActionResult<IList<Person>> Get()
    {
        return Ok(_personService.GetAllPersons());
    }

}
