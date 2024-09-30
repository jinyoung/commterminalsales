package commterminalsales.domain;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import commterminalsales.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(collectionResourceRel="specs", path="specs")
public interface SpecRepository extends PagingAndSortingRepository<Spec, >{
    @Query(value = "select spec " +
        "from Spec spec " +
        "where(:id is null or spec.id like %:id%)")
       Spec findByGetSpecDetail
(String id);
}