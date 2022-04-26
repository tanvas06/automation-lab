const {Builder, Capabilities} = require(`selenium-webdriver`)
require(`chromedriver`)

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie, crossOut, unClick, deleteMovie} = require('../functions/addMovies')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test (`add a movie`, async () => {
    await addMovie(driver)
    await driver.sleep(3000)
})

test (`cross out movie`, async () => {
    await crossOut(driver)
    await driver.sleep(3000)
})

test (`uncross movie`, async () => {
    await unClick(driver)
    await driver.sleep(3000)
})

test (`delete movie`, async () => {
    await deleteMovie(driver)
    await driver.sleep(2000)
})