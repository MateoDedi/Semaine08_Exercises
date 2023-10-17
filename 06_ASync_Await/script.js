function generateBG(color, delay) {
    return new Promise((resolve, reject) => {
        let timeCount = Math.random() * 0.55;

        if (timeCount > 0.5) {
            reject();
        } else {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay);
        }
    });
}

async function main() {
    while (true) {
        try {
            await generateBG('blue', 1000);
            await generateBG('yellow', 1000);
            await generateBG('red', 1000);
            await generateBG('cyan', 1000);
            await generateBG('violet', 1000);
            await generateBG('green', 1000);
            await generateBG('purple', 1000);
        } catch (error) {
            console.log('Oh no! An error:');
        }
    }
}

main();