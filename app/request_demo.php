<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'POST is the only allowed method for this request.';
    exit;
}

const OWNER_EMAIL = 'alexander.shishow@gmail.com';

function prepare_input($value)
{
    $value = trim($value);
    $value = stripslashes($value);
    $value = htmlspecialchars($value);
    return $value;
}

function respond($message, $httpCode = 200)
{
    http_response_code($httpCode);
    echo $message;
    exit;
}

$email = prepare_input($_POST['email'] ?? '');
$firstName = prepare_input($_POST['first-name'] ?? '');
$lastName = prepare_input($_POST['last-name'] ?? '');
$jobTitle = prepare_input($_POST['job'] ?? '');
$companySize = prepare_input($_POST['size'] ?? '');
if (!$email || !$firstName || !$lastName || !$companySize) {
    respond('Missed some required fields.', 400);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond('Email ' . $email . ' is considered invalid.', 400);
}
$responseLetterHtml =
    '<html><body>Hi ' . $firstName . '!<br><br>' .
    'It’s Alex from Cloudzilla.<br><br>' .
    'Thanks for getting in touch — we’re excited to chat with you!<br>' .
    'Please click this link to schedule your demo: <br>' .
    '<a href="https://cloudzilla.appointlet.com">cloudzilla.appointlet.com</a><br><br>' .
    'We look forward to talking with you soon.<br><br>Best,<br>Alex</body></html>';
$ownerLetterHtml =
    '<html><body>Here is new demo request:<br>' .
    'Email: ' . $email . '<br>' .
    'First Name: ' . $firstName . '<br>' .
    'Last Name: ' . $lastName . '<br>' .
    'Job Title: ' . $jobTitle . '<br>' .
    'Company Size: ' . $companySize . '</body></html>';
$headers = implode("\r\n", [
    'From: info@cloudzilla.ai',
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8'
]);
mail($email, '[Cloudzilla] Scheduling a demo', $responseLetterHtml, $headers);
mail(OWNER_EMAIL, '[Cloudzilla] Scheduling a demo', $ownerLetterHtml, $headers);
respond('Request accepted');
exit;