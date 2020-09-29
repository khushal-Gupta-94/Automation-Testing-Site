package stepDefinitions;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class LaunchBrowser {
    WebDriver driver;
    public WebDriver browser(String browsername)
    {
        if (browsername.equalsIgnoreCase("edge"))
        {
            WebDriverManager.edgedriver().setup();
            driver = new EdgeDriver();
        }
        else if (browsername.equalsIgnoreCase("firefox"))
        {
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver();
        }
        else
        {
            WebDriverManager.chromiumdriver().setup();
            driver = new ChromeDriver();
        }
        return driver;
    }
}
