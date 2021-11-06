# brio

I have chose to create my own project using WebdriverIO v7. To call on selectors the Page Object pattern is used. The test file for upload is in "/test/fixtures" folder

To clone the project ````git clone https://github.com/andreyivanov86/brio.git````

Install dependencies ````npm install````

Run tests:

test all specs ````npm run test.all````

test navigation ````npm run test.nav```` 

test upload ````npm run test.upload```` 

test dynamic controls ````npm run test.dynamic_controls```` 

test drag and drop ````npm run test.dragNdrop```` 

Once test execution is finished the Allure report will be genereated.

Run ````allure open```` to view graphical report in browser. 

NOTE:

Unfortunately I was unable to create custom function for Drag and Drop. This is due to JSON Wire Protocol being depreciated in modern browsers. 
I have attempted to execute mouse moves with JS without luck. In the previous version I would implement custom command as follows:

````
browser.addCommand("dragNdrop", async (element, target) => {
  await browser.moveToElement(element);
  await browser.buttonDown(0);
  await browser.moveToElement(target);
  await browser.buttonUp(0);
}
````

The Error screenshot can be found in Allure report by clicking on the last GET request in execution body for the failed test. 
