#include "base.h"

BOOL
OnCreate(HWND hwnd, LPCREATESTRUCT lpcs)
{
    RegisterDragDrop(hwnd,
        winrt::make<SimpleDropTarget>(hwnd).get());

    retorna VERDADEIRO;
}

int WINAPI WinMain(HINSTANCE dica, HINSTANCE dicaAnterior,
    LPSTR lpCmdLine, int nShowCmd)
{
    ...
    if (SUCCEEDED( OleInitialize (NULL))) {
        ...
    }
    ...
}