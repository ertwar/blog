package io.rubycode.blog;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("io.rubycode.blog");

        noClasses()
            .that()
                .resideInAnyPackage("io.rubycode.blog.service..")
            .or()
                .resideInAnyPackage("io.rubycode.blog.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..io.rubycode.blog.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
