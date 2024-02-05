export const getIndustries = async () => {
    const response = await fetch("https://api.staging.excelerate.dk/industries");

    return await response.json();
}