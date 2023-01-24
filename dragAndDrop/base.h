#include <winrt/base.h>
#include <wil/ result_macros.h >
#include <wil/ resource.h >

struct SimpleDropTarget:
    winrt::implements<SimpleDropTarget, IDropTarget>
{
    SimpleDropTarget(HWND hwnd): hwndOwner(hwnd),
        helper(winrt::create_instance<IDropTargetHelper>(
            CLSID_DragDropHelper))
    {
    }

    STDMETHODIMP DragEnter(IDataObject* pDataObject,
        DWORD grfKeyState, POINTL pt, DWORD* pdwEffect)
    {
        dto.copy_from(pDataObject);
        RETURN_IF_FAILED(CalculateFeedback(grfKeyState, pdwEffect));
        PONTO ponto{ pt.x, pt.y };
        RETURN_IF_FAILED(helper->DragEnter(hwndOwner, dto.get(),
            &point, *pdwEffect));
        retornar S_OK;
    }

    STDMETHODIMP DragOver(
        DWORD grfKeyState, POINTL pt, DWORD* pdwEffect)
    {
        RETURN_IF_FAILED(CalculateFeedback(grfKeyState, pdwEffect));
        PONTO ponto{ pt.x, pt.y };
        RETURN_IF_FAILED(helper->DragOver(&point, *pdwEffect));
        retornar S_OK;
    }

    STDMETHODIMP Drop(IDataObject* pDataObject,
        DWORD grfKeyState, POINTL pt, DWORD* pdwEffect)
    {
        dto.copy_from(pDataObject);
        limpeza automática = wil::scope_exit([&] { DragLeave(); });

        RETURN_IF_FAILED(CalculateFeedback(grfKeyState, pdwEffect));
        PONTO ponto{ pt.x, pt.y };
        RETURN_IF_FAILED(helper->Drop(dto.get(), &point, *pdwEffect));
        if (*pdwEffect != DROPEFFECT_NONE) {
            // Faça algo legal.
        }
        retornar S_OK;
    }

    STDMETHODIMP DragLeave()
    {
        dto = nullptr;
        RETURN_IF_FAILED(helper->DragLeave());
        retornar S_OK;
    }

privado:
    HWND hwndOwner;
    winrt::com_ptr<IDataObject> dto;
    winrt::com_ptr<IDropTargetHelper> auxiliar;

    HRESULT CalcularFeedback(
        DWORD grfKeyState,
        DWORD* pdwEffect)
    {
        if (grfKeyState & MK_CONTROL) {
            *pdwEffect = DROPEFFECT_COPY;
        } outro {
            *pdwEffect = DROPEFFECT_MOVE;
        }
        retornar S_OK;
    }
};
