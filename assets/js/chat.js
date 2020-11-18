export function handleMessageNofit(data) {
    const { message, nickname } = data;
    console.log(`${nickname}: ${message}`);
}