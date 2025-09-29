<?php
if (!function_exists('apiResponse')) {
    /**
     * Return a standardized API response
     *
     * @param bool $success
     * @param string $message
     * @param mixed $info
     * @param int $status HTTP status code
     * @return \Illuminate\Http\JsonResponse
     */
    function apiResponse(bool $success, string $message = "", $info = null, int $status = 200)
    {
        return response()->json([
            'success' => $success,
            'message' => $message,
            'info'    => $info
        ], $status);
    }
}
