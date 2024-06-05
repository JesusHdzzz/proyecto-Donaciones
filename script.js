document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const campaign = document.getElementById('campaign').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    const donationItem = document.createElement('li');
    donationItem.textContent = `${name} donó $${amount} a ${campaign}`;

    document.getElementById('donationList').appendChild(donationItem);

    document.getElementById('donationForm').reset();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const message = document.getElementById('message').value;

    alert(`Gracias, ${contactName}. Hemos recibido tu mensaje y te responderemos pronto.`);

    document.getElementById('contactForm').reset();
});

function selectCampaign(campaignName) {
    document.getElementById('campaign').value = campaignName;
    document.getElementById('campaign').scrollIntoView({ behavior: 'smooth' });
}
