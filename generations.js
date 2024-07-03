async function getGenerations() {

};

async function createForm() {
    const generationsCollection = await getGenerations();
    generationsCollection.forEach(async(generation) => {

    });
};

document.addEventListener("DOMContentLoaded", createForm);