const { By } = require('selenium-webdriver');

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Peanut Butter Falcon')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()
}

const crossOut = async (driver) => {
    await driver.findElement(By.xpath('//span')).click()
    const clicked = await driver.findElement(By.className('checked'))
    expect(clicked).toBeTruthy
}

const unClick = async (driver) => {
    await driver.findElement(By.xpath('//*[@class="checked"]')).click()
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//*[contains(text(), "x")]')).click()
}

module.exports = {
    addMovie,
    crossOut,
    unClick,
    deleteMovie
}