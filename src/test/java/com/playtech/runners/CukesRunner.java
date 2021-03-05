package com.playtech.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "html:target/default-html-reports"},
        glue = "com/playtech/stepDefs",
        features = "src/test/resources/features/",
        dryRun = false,
        tags = "@Test"

)

public class CukesRunner {
}
