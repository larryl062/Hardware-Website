document.addEventListener("DOMContentLoaded", function() {
    const hardwareDetails = {
        motherboard: {
            title: "Motherboard",
            description: `
                Serves as the main printed circuit board that connects and interconnects various computer system components.
                It permits communication between hardware and serves as a middleman.
                It distributes electricity between various parts.`,
                image:"Motherboard-Download-PNG.png"
            
                
        },
        cpu: {
            title: "Microprocessor (CPU)",
            image:"cpu.png",
            description: `
                Also known to overheat, necessitating a cooler like a fan or heatsink.
                It can run billions of instructions every single second.`
        },
        smps: {
            title: "SMPS (Switched-Mode Power Supply)",
            image:"smps.png",
            description: `
                It is responsible for providing stable electrical power to the hardware components.`
        },
        ram: {
            title: "RAM (Random Access Memory)",
            image:"RAM.png",
            description: `
                It is considered the main memory of the computer and is used for temporary data storage during program execution.
                Due to its short term memory, it allows the computer to quickly access data and run applications smoothly.`
        },
        graphicsCard: {
            title: "Graphics Card",
            image:"graphics.png",
            description: `
                Equipped with dedicated processors for handling graphics processing tasks, improving the user experience.`
        },
        hardDrive: {
            title: "Hard Disks",
            image:"hard disk.png",
            description: `
                Also known as disk memory, are considered permanent storage and are used for data storage, although solid-state drives (SSDs) are gaining popularity.`
        },
        rom: {
            title: "ROM (Read-Only Memory)",
            image:"rom.png",
            description: `
                Non-volatile memory that permits accessing information smoothly without needing to constantly write and rewrite data.
                Can only be read, and not edited.
                Less costly and far more reliable than RAM.`
        }
    };

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const part = event.target.id;
            const contentDiv = document.getElementById('content');

            if (hardwareDetails[part]) {
                contentDiv.innerHTML = `
                    <h2>${hardwareDetails[part].title}</h2>
                    
                    <p>${hardwareDetails[part].description}</p>
                    <img src=" ${hardwareDetails[part].image}">
                `;
            }
        });
    });
});
