function changeBackgroundColor(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

async function main() {
    while (true) {
        await changeBackgroundColor('blue', 1000);
        await changeBackgroundColor('yellow', 1000);
        await changeBackgroundColor('red', 1000);
        await changeBackgroundColor('cyan', 1000);
        await changeBackgroundColor('violet', 1000);
        await changeBackgroundColor('green', 1000);
        await changeBackgroundColor('purple', 1000);
    }
}

main();