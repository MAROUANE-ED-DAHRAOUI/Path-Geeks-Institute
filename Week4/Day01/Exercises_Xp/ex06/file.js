(function(number_children, partner_name, location, job_title) 
{
    const message = `You will be a ${job_title} in ${location}, and married to ${partner_name} with ${number_children} kids.`;
    
    // Display in DOM
    document.body.innerHTML = `<h2>${message}</h2>`;

})(3, 'Alice', 'Paris', 'Software Engineer');