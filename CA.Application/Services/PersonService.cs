using CA.Models;
using CA.Repositories;

namespace CA.Services;

public class PersonService : IPersonService
{
    private readonly IPersonRepository _personRepository;

    public PersonService(IPersonRepository personRepository)
    {
        _personRepository = personRepository;
    }

    List<Person> IPersonService.GetAllPersons()
    {
        return _personRepository.GetAllPersons();
    }
}
