RButton::
	While (GetKeyState("RButton","p")) {
		SendInput, {Blind}{RButton Down}
		Sleep, 30
		SendInput, {Blind}{RButton Up}
		If (GetKeyState("Space", "p")) {
				Sleep, 100
				SendInput, {Blind}{Lshift & p Up}
				Sleep, 100
				SendInput, {Blind}{LShift & p Down}
				Sleep, 100
				SendInput, {Blind}{Space Up}
				Msgbox Combination 1
				return
			} Else {
				SendInput, {Blind}{Lshift Down}
				Sleep, 30
				SendInput, {Blind}{p Down}
				MsgBox, Combination 2
			}
		}
	SendInput, {Blind}{LShift Up}
	Sleep, 30
	SendInput, {Blind}{p Up}
	MsgBox, Combination 3
	

				; Sleep, 20
				; SendInput, {Blind}{RButton Up}
				; Sleep, 20
				; SendInput, {Blind}{Space Down}
				; Sleep, 20
				; SendInput, {Blind}{Space Up}
