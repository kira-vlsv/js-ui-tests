const allureReporter = require('@wdio/allure-reporter').default
describe("Test suite", () => {

  it("Open page and verify title", async () => {
    allureReporter.addFeature('Test Feature');
    allureReporter.addStory('Test Story');

    await browser.setWindowSize(1920, 1080)
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard')
    const pageTitle = await browser.getTitle()
    expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App")
  })

  it("Open doctors slider and verify error when empty e-mail", async () => {
    allureReporter.addFeature('Test Feature');
    allureReporter.addStory('Test Story');

    await allureReporter.step('Open Doctors page', async (s1) => {
      await $('div.doctors').click();
    })

    await allureReporter.step('Open Add New Doctor form', async (s1) => {
      await $("//button[text()='Add New Doctor']").click();
    })

    await allureReporter.step('Set name and click save', async (s1) => {
      await $("input[name='Name']").setValue("Kira V")
      await $("//button[text()='Save']").click();
    })

    await allureReporter.step('Verify email error is displayed', async (s1) => {
      const emailErrorText = await $("#Email-info").getText()
      expect(emailErrorText).toEqual("Enter valid email")
    })
  })

})