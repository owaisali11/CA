using CA.Models;

namespace CA.Repositories;

public class PersonRepository : IPersonRepository
{
    private List<Person> _persons = new()
    {
        new() { Id = 1, Name = "First", Email = "first@email.com" },
        new() { Id = 2, Name = "Second", Email = "second@email.com" },
        new() { Id = 3, Name = "Third", Email = "third@email.com" },
    };

    List<Person> IPersonRepository.GetAllPersons()
    {
        return _persons;
    }
}