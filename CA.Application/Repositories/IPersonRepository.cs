using CA.Models;

namespace CA.Repositories;

public interface IPersonRepository
{
    List<Person> GetAllPersons();
}
