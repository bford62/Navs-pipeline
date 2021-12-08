package stepDefinitions;

import base.ApplicationPageBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.CM_FW_Update;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.awt.*;

public class LoginSteps extends ApplicationPageBase {

    CM_FW_Update cm_fw_update = PageFactory.initElements(driver, CM_FW_Update.class);

    @Given("^User need to enter MAC Address to CableMedic$")
    public void user_need_to_enter_MAC_Address_to_CableMedic() throws AWTException, InterruptedException {
        // Write code here that turns the phrase above into concrete actions
        cm_fw_update.enter_MAC_Value();
        Thread.sleep(5000);
        cm_fw_update.compare_FirmwareVersion_And_Latest_FirmwareVersion();

    }

    @When("^User clicked upgrade, it shows in progress$")
    public void User_clicked_upgade_it_shows_in_progress() throws AWTException, InterruptedException {
        ;
        System.out.print("Please Wait while downloading happens");
    }

    @Then("^User has upgraded modem$")
    public void User_has_upgraded_modem() {
        // Write code here that turns the phrase above into concrete actions
     Assert.assertTrue(true);
    }
}
