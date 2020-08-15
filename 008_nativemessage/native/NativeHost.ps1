# 以下を参考
# https://github.com/hmemcpy/ChromeRegJump/blob/master/src/host/nativehost.ps1
function Set-Respond($response) {
    $msg = $response | ConvertTo-Json

    try {
        $writer = New-Object System.IO.BinaryWriter([System.Console]::OpenStandardOutput())
        $buf = [System.Text.Encoding]::UTF8.GetBytes($msg)
        $writer.Write([int]$buf.Length)
        $writer.Write($buf)
        $writer.Close()
    } finally {
        $writer.Dispose()
    }
}

function Read-Input() {
    $obj = $null
    try {
        $reader = New-Object System.IO.BinaryReader([System.Console]::OpenStandardInput())
        $len = $reader.ReadInt32()
        $buf = $reader.ReadBytes($len)
        $msg = [System.Text.Encoding]::UTF8.GetString($buf)

        $obj = $msg | ConvertFrom-Json
    } finally {
        $reader.Dispose()
    }
    return $obj
}

While ($data = Read-Input) {
    Set-Respond @{responce=$data.text}
}
