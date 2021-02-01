(async () => {
    const $ = (selector, target = document) => target.querySelector(selector)
    const $$ = (selector, target = document) => Array.from(target.querySelectorAll(selector))

    const $log = (...args) => console.log(...args)
    const $warn = (...args) => console.warn(...args)

    const $allTrs = $$('#ctl00_PlaceHolderMain_grid1_DXMainTable > tbody > tr')

    const wait = (ms) => new Promise(res => setTimeout(res, ms))

    $log("number of tr:", $allTrs.length)
    let i = 0
    for (let $tr of $allTrs){
        const rowId = i++
        const $img = $('img:nth-child(1)', $tr)
        $log($img)

        $img.click()

        await wait(5000)

        const $chkPhuongXa = $(`#ctl00_PlaceHolderMain_grid1_dxdt${rowId}_check_I`)
        if(!$chkPhuongXa){
            $warn("Checkbox `phuong xa` not found")
            continue
        }

        $chkPhuongXa.click()

        $dlBtn = $(`#ctl00_PlaceHolderMain_grid1_dxdt${rowId}_ASPxButton2`)

        if(!$dlBtn){
            $warn("Download btn not found")
            continue
        }

        $log(`Start download: ${rowId}`)
        $dlBtn.click()
        await wait(4000)
    }
})()