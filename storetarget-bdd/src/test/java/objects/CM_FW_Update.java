package objects;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

import java.awt.*;

public class CM_FW_Update {

    WebDriver driver;

    @FindBy(id = "search")
    WebElement searchBar;

    @FindBy(css = "td > a")
    WebElement macAddress;

    @FindBy(id = "swver")
    WebElement firmwareVersionTextField;

    @FindBy(id = "latestfirmware")
    WebElement latestFirmwareTextfield;

    @FindBy(id = "betafirmware")
    WebElement firmwareToggle;

    @FindBy(xpath = "//span[contains(.,'Ok')]")
    WebElement okAlert;

    @FindBy(id = "upgrade_firmware")
    WebElement upgradeFW;

    public void enter_MAC_Value() {
        String mac = System.getProperty("mac");

        searchBar.sendKeys( "98:52:4a:ff:fd:88" + "\n");
        macAddress.click();
    }

    public void compare_FirmwareVersion_And_Latest_FirmwareVersion() throws InterruptedException, AWTException {
        String current = firmwareVersionTextField.getText();
        String latest = latestFirmwareTextfield.getText();

        if (current.equals(latest)) {
            firmwareToggle.click();
            okAlert.click();
        }

        String current2 = firmwareVersionTextField.getText();
        String latest2 = latestFirmwareTextfield.getText();

        if (current2.equals(latest2)) {
            System.out.println("Current Versions and Latest Versions are the same, no update available");
            Assert.assertTrue(false);
        } else {
            upgradeFW.click();
            Thread.sleep(10000);
            System.out.println("Your update is in progress, please wait.");
        }
    }
}


