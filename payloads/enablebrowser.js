﻿function enablebrowser(){
	window.mira_blob_2_len = 65536;
	window.mira_blob_2 = malloc(window.mira_blob_2_len);
	write_mem(window.mira_blob_2, [233, 208, 5, 0, 0, 65, 84, 85, 83, 187, 130, 0, 0, 192, 72, 131, 236, 112, 72, 137, 217, 15, 50, 72, 193, 226, 32, 72, 199, 68, 36, 16, 102, 6, 0, 0, 72, 9, 208, 199, 4, 36, 127, 69, 76, 70, 72, 137, 245, 72, 141, 184, 64, 254, 255, 255, 72, 137, 230, 186, 4, 0, 0, 0, 255, 21, 10, 27, 0, 0, 76, 139, 5, 3, 27, 0, 0, 133, 192, 15, 133, 7, 1, 0, 0, 72, 137, 217, 73, 188, 85, 72, 137, 229, 83, 72, 131, 236, 15, 50, 72, 193, 226, 32, 72, 137, 195, 72, 9, 211, 76, 137, 100, 36, 28, 199, 68, 36, 36, 88, 72, 141, 29, 72, 141, 116, 36, 28, 72, 141, 187, 192, 48, 18, 0, 186, 12, 0, 0, 0, 65, 255, 208, 133, 192, 117, 21, 72, 199, 68, 36, 16, 114, 6, 0, 0, 72, 129, 195, 240, 20, 60, 0, 233, 88, 2, 0, 0, 76, 137, 100, 36, 40, 72, 141, 116, 36, 40, 199, 68, 36, 48, 88, 72, 141, 29, 72, 141, 187, 128, 94, 67, 0, 186, 12, 0, 0, 0, 255, 21, 132, 26, 0, 0, 133, 192, 117, 11, 72, 199, 68, 36, 16, 5, 5, 0, 0, 235, 49, 76, 137, 100, 36, 52, 72, 141, 116, 36, 52, 199, 68, 36, 60, 88, 72, 141, 29, 72, 141, 187, 64, 94, 67, 0, 186, 12, 0, 0, 0, 255, 21, 81, 26, 0, 0, 133, 192, 117, 21, 72, 199, 68, 36, 16, 3, 5, 0, 0, 72, 129, 195, 112, 164, 30, 0, 233, 232, 1, 0, 0, 76, 137, 100, 36, 64, 72, 141, 116, 36, 64, 199, 68, 36, 72, 88, 72, 141, 29, 72, 141, 187, 176, 90, 67, 0, 186, 12, 0, 0, 0, 255, 21, 20, 26, 0, 0, 133, 192, 116, 7, 49, 219, 233, 185, 1, 0, 0, 72, 199, 68, 36, 16, 1, 5, 0, 0, 72, 129, 195, 96, 163, 30, 0, 233, 164, 1, 0, 0, 72, 137, 217, 199, 68, 36, 4, 127, 69, 76, 70, 15, 50, 72, 193, 226, 32, 72, 141, 116, 36, 4, 72, 9, 208, 186, 4, 0, 0, 0, 72, 141, 184, 48, 72, 207, 255, 65, 255, 208, 76, 139, 5, 197, 25, 0, 0, 133, 192, 117, 91, 72, 137, 217, 199, 68, 36, 84, 88, 72, 141, 29, 15, 50, 72, 193, 226, 32, 72, 141, 116, 36, 76, 72, 9, 194, 72, 184, 85, 72, 137, 229, 83, 72, 131, 236, 72, 141, 154, 48, 72, 207, 255, 72, 137, 68, 36, 76, 72, 141, 187, 48, 127, 1, 0, 186, 12, 0, 0, 0, 65, 255, 208, 133, 192, 15, 133, 107, 255, 255, 255, 72, 199, 68, 36, 16, 116, 4, 0, 0, 72, 129, 195, 64, 158, 20, 0, 233, 22, 1, 0, 0, 72, 137, 217, 199, 68, 36, 8, 127, 69, 76, 70, 15, 50, 72, 193, 226, 32, 72, 141, 116, 36, 8, 72, 9, 208, 186, 4, 0, 0, 0, 72, 141, 184, 48, 106, 207, 255, 65, 255, 208, 76, 139, 5, 55, 25, 0, 0, 133, 192, 117, 91, 72, 137, 217, 199, 68, 36, 96, 88, 72, 141, 29, 15, 50, 72, 193, 226, 32, 72, 141, 116, 36, 88, 72, 9, 194, 72, 184, 85, 72, 137, 229, 83, 72, 131, 236, 72, 141, 154, 48, 106, 207, 255, 72, 137, 68, 36, 88, 72, 141, 187, 48, 127, 1, 0, 186, 12, 0, 0, 0, 65, 255, 208, 133, 192, 15, 133, 221, 254, 255, 255, 72, 199, 68, 36, 16, 85, 4, 0, 0, 72, 129, 195, 176, 167, 20, 0, 233, 136, 0, 0, 0, 72, 137, 217, 199, 68, 36, 12, 127, 69, 76, 70, 15, 50, 72, 193, 226, 32, 72, 141, 116, 36, 12, 72, 9, 208, 186, 4, 0, 0, 0, 72, 141, 184, 208, 20, 207, 255, 65, 255, 208, 131, 202, 255, 133, 192, 117, 110, 72, 137, 217, 199, 68, 36, 108, 88, 72, 141, 29, 15, 50, 72, 185, 85, 72, 137, 229, 83, 72, 131, 236, 72, 193, 226, 32, 72, 9, 208, 72, 137, 76, 36, 100, 72, 141, 152, 208, 20, 207, 255, 72, 141, 116, 36, 100, 72, 141, 184, 80, 138, 3, 0, 186, 12, 0, 0, 0, 255, 21, 104, 24, 0, 0, 133, 192, 15, 133, 80, 254, 255, 255, 72, 199, 68, 36, 16, 5, 4, 0, 0, 72, 129, 195, 112, 109, 40, 0, 72, 139, 69, 8, 186, 8, 0, 0, 0, 72, 141, 124, 36, 16, 72, 139, 48, 255, 211, 49, 210, 72, 131, 196, 112, 137, 208, 91, 93, 65, 92, 195, 72, 139, 71, 8, 76, 139, 72, 72, 76, 139, 64, 64, 72, 139, 70, 8, 72, 139, 48, 72, 129, 254, 5, 4, 0, 0, 117, 42, 185, 130, 0, 0, 192, 15, 50, 72, 137, 209, 72, 193, 225, 32, 72, 9, 200, 72, 141, 144, 208, 20, 207, 255, 72, 141, 136, 224, 116, 193, 0, 72, 5, 32, 231, 213, 1, 233, 1, 1, 0, 0, 72, 129, 254, 85, 4, 0, 0, 117, 42, 185, 130, 0, 0, 192, 15, 50, 72, 137, 209, 72, 193, 225, 32, 72, 9, 200, 72, 141, 144, 48, 106, 207, 255, 72, 141, 136, 224, 3, 211, 0, 72, 5, 96, 100, 234, 1, 233, 206, 0, 0, 0, 72, 129, 254, 116, 4, 0, 0, 117, 42, 185, 130, 0, 0, 192, 15, 50, 72, 137, 209, 72, 193, 225, 32, 72, 9, 200, 72, 141, 144, 48, 72, 207, 255, 72, 141, 136, 224, 114, 211, 0, 72, 5, 16, 210, 234, 1, 233, 155, 0, 0, 0, 72, 129, 254, 1, 5, 0, 0, 117, 39, 185, 130, 0, 0, 192, 15, 50, 72, 137, 209, 72, 193, 225, 32, 72, 9, 200, 72, 141, 144, 64, 254, 255, 255, 72, 141, 136, 224, 132, 9, 1, 72, 5, 48, 24, 44, 2, 235, 107, 72, 129, 254, 3, 5, 0, 0, 116, 9, 72, 129, 254, 5, 5, 0, 0, 117, 39, 185, 130, 0, 0, 192, 15, 50, 72, 137, 209, 72, 193, 225, 32, 72, 9, 200, 72, 141, 144, 64, 254, 255, 255, 72, 141, 136, 224, 132, 9, 1, 72, 5, 176, 24, 44, 2, 235, 50, 72, 129, 254, 114, 6, 0, 0, 116, 4, 131, 200, 255, 195, 185, 130, 0, 0, 192, 15, 50, 72, 137, 209, 72, 193, 225, 32, 72, 9, 200, 72, 141, 144, 64, 254, 255, 255, 72, 141, 136, 88, 227, 19, 1, 72, 5, 96, 1, 48, 2, 72, 139, 9, 73, 199, 64, 4, 0, 0, 0, 0, 77, 139, 144, 24, 1, 0, 0, 65, 199, 64, 20, 0, 0, 0, 0, 65, 199, 2, 0, 0, 0, 0, 73, 137, 72, 48, 72, 131, 201, 255, 72, 139, 0, 72, 129, 254, 5, 4, 0, 0, 73, 137, 65, 32, 73, 137, 65, 24, 72, 139, 135, 48, 1, 0, 0, 72, 191, 19, 0, 0, 0, 0, 0, 1, 56, 72, 137, 72, 96, 72, 137, 120, 88, 72, 137, 72, 104, 117, 9, 72, 129, 194, 176, 234, 76, 0, 235, 110, 72, 129, 254, 85, 4, 0, 0, 117, 9, 72, 129, 194, 0, 111, 77, 0, 235, 92, 72, 129, 254, 116, 4, 0, 0, 117, 9, 72, 129, 194, 128, 133, 77, 0, 235, 74, 72, 129, 254, 1, 5, 0, 0, 117, 9, 72, 129, 194, 64, 137, 79, 0, 235, 56, 72, 129, 254, 3, 5, 0, 0, 117, 9, 72, 129, 194, 208, 140, 79, 0, 235, 38, 72, 129, 254, 5, 5, 0, 0, 117, 9, 72, 129, 194, 16, 141, 79, 0, 235, 20, 72, 129, 254, 114, 6, 0, 0, 15, 133, 13, 255, 255, 255, 72, 129, 194, 208, 119, 80, 0, 72, 131, 236, 8, 49, 246, 191, 0, 0, 4, 60, 255, 210, 49, 192, 90, 195, 83, 69, 49, 201, 72, 131, 236, 16, 65, 131, 200, 255, 185, 2, 16, 0, 0, 186, 3, 0, 0, 0, 190, 8, 0, 0, 0, 49, 255, 72, 199, 4, 36, 102, 6, 0, 0, 232, 109, 5, 0, 0, 72, 141, 116, 36, 8, 72, 141, 61, 134, 250, 255, 255, 72, 137, 195, 72, 137, 68, 36, 8, 232, 183, 0, 0, 0, 72, 137, 231, 72, 137, 222, 186, 8, 0, 0, 0, 255, 21, 243, 20, 0, 0, 72, 137, 223, 190, 8, 0, 0, 0, 232, 66, 5, 0, 0, 72, 139, 4, 36, 72, 131, 196, 16, 91, 195, 72, 131, 236, 24, 72, 137, 124, 36, 8, 72, 141, 116, 36, 8, 72, 141, 61, 87, 253, 255, 255, 232, 117, 0, 0, 0, 49, 192, 72, 131, 196, 24, 195, 83, 72, 129, 236, 0, 1, 0, 0, 232, 109, 0, 0, 0, 232, 163, 6, 0, 0, 232, 84, 5, 0, 0, 232, 88, 255, 255, 255, 72, 137, 227, 72, 137, 199, 232, 184, 255, 255, 255, 232, 10, 4, 0, 0, 72, 137, 223, 72, 141, 21, 161, 11, 0, 0, 190, 0, 1, 0, 0, 49, 192, 255, 21, 112, 20, 0, 0, 72, 137, 223, 232, 84, 4, 0, 0, 72, 129, 196, 0, 1, 0, 0, 49, 192, 91, 195, 72, 199, 192, 37, 0, 0, 0, 233, 74, 11, 0, 0, 72, 199, 192, 54, 0, 0, 0, 233, 62, 11, 0, 0, 72, 199, 192, 11, 0, 0, 0, 233, 50, 11, 0, 0, 72, 131, 236, 8, 72, 141, 53, 94, 18, 0, 0, 72, 141, 61, 92, 11, 0, 0, 72, 199, 5, 204, 18, 0, 0, 0, 0, 0, 0, 232, 82, 4, 0, 0, 133, 192, 116, 42, 72, 141, 53, 60, 18, 0, 0, 72, 141, 61, 73, 11, 0, 0, 232, 59, 4, 0, 0, 133, 192, 116, 19, 72, 141, 53, 37, 18, 0, 0, 72, 141, 61, 69, 11, 0, 0, 232, 36, 4, 0, 0, 139, 61, 19, 18, 0, 0, 72, 141, 21, 20, 18, 0, 0, 72, 141, 53, 63, 11, 0, 0, 232, 243, 3, 0, 0, 139, 61, 250, 17, 0, 0, 72, 141, 21, 59, 18, 0, 0, 72, 141, 53, 56, 11, 0, 0, 232, 218, 3, 0, 0, 139, 61, 225, 17, 0, 0, 72, 141, 21, 90, 18, 0, 0, 72, 141, 53, 48, 11, 0, 0, 232, 193, 3, 0, 0, 139, 61, 200, 17, 0, 0, 72, 141, 21, 33, 18, 0, 0, 72, 141, 53, 31, 11, 0, 0, 232, 168, 3, 0, 0, 139, 61, 175, 17, 0, 0, 72, 141, 21, 72, 18, 0, 0, 72, 141, 53, 21, 11, 0, 0, 232, 143, 3, 0, 0, 139, 61, 150, 17, 0, 0, 72, 141, 21, 87, 18, 0, 0, 72, 141, 53, 21, 11, 0, 0, 232, 118, 3, 0, 0, 139, 61, 125, 17, 0, 0, 72, 141, 21, 198, 17, 0, 0, 72, 141, 53, 26, 11, 0, 0, 232, 93, 3, 0, 0, 139, 61, 100, 17, 0, 0, 72, 141, 21, 109, 17, 0, 0, 72, 141, 53, 26, 11, 0, 0, 232, 68, 3, 0, 0, 139, 61, 75, 17, 0, 0, 72, 141, 21, 220, 17, 0, 0, 72, 141, 53, 30, 11, 0, 0, 232, 43, 3, 0, 0, 139, 61, 50, 17, 0, 0, 72, 141, 21, 27, 18, 0, 0, 72, 141, 53, 19, 11, 0, 0, 232, 18, 3, 0, 0, 139, 61, 25, 17, 0, 0, 72, 141, 21, 130, 17, 0, 0, 72, 141, 53, 8, 11, 0, 0, 232, 249, 2, 0, 0, 139, 61, 0, 17, 0, 0, 72, 141, 21, 137, 17, 0, 0, 72, 141, 53, 253, 10, 0, 0, 232, 224, 2, 0, 0, 139, 61, 231, 16, 0, 0, 72, 141, 21, 136, 17, 0, 0, 72, 141, 53, 243, 10, 0, 0, 232, 199, 2, 0, 0, 139, 61, 206, 16, 0, 0, 72, 141, 21, 239, 16, 0, 0, 72, 141, 53, 233, 10, 0, 0, 232, 174, 2, 0, 0, 139, 61, 181, 16, 0, 0, 72, 141, 21, 126, 17, 0, 0, 72, 141, 53, 223, 10, 0, 0, 232, 149, 2, 0, 0, 139, 61, 156, 16, 0, 0, 72, 141, 21, 133, 16, 0, 0, 72, 141, 53, 214, 10, 0, 0, 232, 124, 2, 0, 0, 139, 61, 131, 16, 0, 0, 72, 141, 21, 52, 17, 0, 0, 72, 141, 53, 211, 10, 0, 0, 232, 99, 2, 0, 0, 139, 61, 106, 16, 0, 0, 72, 141, 21, 147, 16, 0, 0, 72, 141, 53, 210, 10, 0, 0, 232, 74, 2, 0, 0, 139, 61, 81, 16, 0, 0, 72, 141, 21, 178, 16, 0, 0, 72, 141, 53, 208, 10, 0, 0, 232, 49, 2, 0, 0, 139, 61, 56, 16, 0, 0, 72, 141, 21, 57, 17, 0, 0, 72, 141, 53, 190, 10, 0, 0, 232, 24, 2, 0, 0, 139, 61, 31, 16, 0, 0, 72, 141, 21, 112, 16, 0, 0, 72, 141, 53, 178, 10, 0, 0, 232, 255, 1, 0, 0, 139, 61, 6, 16, 0, 0, 72, 141, 21, 23, 16, 0, 0, 72, 141, 53, 161, 10, 0, 0, 232, 230, 1, 0, 0, 139, 61, 237, 15, 0, 0, 72, 141, 21, 198, 16, 0, 0, 72, 141, 53, 143, 10, 0, 0, 232, 205, 1, 0, 0, 139, 61, 212, 15, 0, 0, 72, 141, 21, 125, 16, 0, 0, 72, 141, 53, 131, 10, 0, 0, 232, 180, 1, 0, 0, 139, 61, 187, 15, 0, 0, 72, 141, 21, 156, 16, 0, 0, 72, 141, 53, 129, 10, 0, 0, 232, 155, 1, 0, 0, 139, 61, 162, 15, 0, 0, 72, 141, 21, 211, 15, 0, 0, 72, 141, 53, 126, 10, 0, 0, 232, 130, 1, 0, 0, 139, 61, 137, 15, 0, 0, 72, 141, 21, 90, 16, 0, 0, 72, 141, 53, 123, 10, 0, 0, 232, 105, 1, 0, 0, 139, 61, 112, 15, 0, 0, 72, 141, 21, 105, 16, 0, 0, 72, 141, 53, 120, 10, 0, 0, 232, 80, 1, 0, 0, 139, 61, 87, 15, 0, 0, 72, 141, 21, 144, 15, 0, 0, 72, 141, 53, 117, 10, 0, 0, 232, 55, 1, 0, 0, 139, 61, 62, 15, 0, 0, 72, 141, 21, 47, 15, 0, 0, 72, 141, 53, 99, 10, 0, 0, 232, 30, 1, 0, 0, 139, 61, 37, 15, 0, 0, 72, 141, 21, 62, 15, 0, 0, 72, 141, 53, 81, 10, 0, 0, 232, 5, 1, 0, 0, 139, 61, 12, 15, 0, 0, 72, 141, 21, 253, 15, 0, 0, 72, 141, 53, 63, 10, 0, 0, 232, 236, 0, 0, 0, 139, 61, 243, 14, 0, 0, 72, 141, 21, 116, 15, 0, 0, 72, 141, 53, 45, 10, 0, 0, 232, 211, 0, 0, 0, 139, 61, 218, 14, 0, 0, 72, 141, 21, 147, 15, 0, 0, 72, 141, 53, 27, 10, 0, 0, 232, 186, 0, 0, 0, 139, 61, 193, 14, 0, 0, 72, 141, 21, 50, 15, 0, 0, 88, 72, 141, 53, 10, 10, 0, 0, 233, 160, 0, 0, 0, 85, 83, 72, 131, 236, 8, 69, 49, 201, 69, 49, 192, 49, 201, 49, 210, 49, 246, 72, 141, 61, 245, 9, 0, 0, 255, 21, 46, 15, 0, 0, 69, 49, 201, 69, 49, 192, 137, 197, 49, 201, 49, 210, 49, 246, 72, 141, 61, 0, 10, 0, 0, 255, 21, 19, 15, 0, 0, 137, 239, 72, 141, 21, 130, 15, 0, 0, 137, 195, 72, 141, 53, 20, 10, 0, 0, 232, 79, 0, 0, 0, 88, 137, 223, 91, 72, 141, 21, 121, 15, 0, 0, 93, 72, 141, 53, 37, 10, 0, 0, 233, 55, 0, 0, 0, 83, 72, 137, 250, 72, 129, 236, 0, 2, 0, 0, 72, 141, 53, 47, 10, 0, 0, 72, 137, 227, 49, 192, 72, 137, 223, 255, 21, 84, 17, 0, 0, 72, 137, 222, 191, 222, 0, 0, 0, 255, 21, 46, 15, 0, 0, 72, 129, 196, 0, 2, 0, 0, 91, 195, 72, 199, 192, 79, 2, 0, 0, 233, 202, 6, 0, 0, 72, 199, 192, 80, 2, 0, 0, 233, 190, 6, 0, 0, 72, 131, 236, 8, 72, 137, 241, 49, 210, 72, 137, 254, 69, 49, 192, 191, 82, 2, 0, 0, 49, 192, 232, 160, 6, 0, 0, 90, 195, 72, 199, 192, 221, 1, 0, 0, 233, 149, 6, 0, 0, 72, 199, 192, 73, 0, 0, 0, 233, 137, 6, 0, 0, 72, 199, 192, 74, 0, 0, 0, 233, 125, 6, 0, 0, 72, 199, 192, 65, 0, 0, 0, 233, 113, 6, 0, 0, 72, 199, 192, 203, 0, 0, 0, 233, 101, 6, 0, 0, 72, 199, 192, 204, 0, 0, 0, 233, 89, 6, 0, 0, 72, 199, 192, 35, 2, 0, 0, 233, 77, 6, 0, 0, 72, 199, 192, 60, 2, 0, 0, 233, 65, 6, 0, 0, 72, 131, 236, 8, 139, 61, 110, 13, 0, 0, 72, 141, 21, 15, 15, 0, 0, 72, 141, 53, 96, 9, 0, 0, 232, 78, 255, 255, 255, 139, 61, 85, 13, 0, 0, 72, 141, 21, 198, 14, 0, 0, 72, 141, 53, 88, 9, 0, 0, 232, 53, 255, 255, 255, 139, 61, 60, 13, 0, 0, 72, 141, 21, 157, 14, 0, 0, 72, 141, 53, 78, 9, 0, 0, 232, 28, 255, 255, 255, 139, 61, 35, 13, 0, 0, 72, 141, 21, 188, 14, 0, 0, 72, 141, 53, 70, 9, 0, 0, 232, 3, 255, 255, 255, 139, 61, 10, 13, 0, 0, 72, 141, 21, 131, 14, 0, 0, 72, 141, 53, 60, 9, 0, 0, 232, 234, 254, 255, 255, 139, 61, 241, 12, 0, 0, 72, 141, 21, 90, 14, 0, 0, 72, 141, 53, 51, 9, 0, 0, 232, 209, 254, 255, 255, 139, 61, 216, 12, 0, 0, 72, 141, 21, 41, 14, 0, 0, 72, 141, 53, 41, 9, 0, 0, 232, 184, 254, 255, 255, 139, 61, 191, 12, 0, 0, 72, 141, 21, 64, 14, 0, 0, 72, 141, 53, 33, 9, 0, 0, 232, 159, 254, 255, 255, 139, 61, 166, 12, 0, 0, 72, 141, 21, 239, 13, 0, 0, 72, 141, 53, 28, 9, 0, 0, 232, 134, 254, 255, 255, 139, 61, 141, 12, 0, 0, 72, 141, 21, 54, 14, 0, 0, 72, 141, 53, 26, 9, 0, 0, 232, 109, 254, 255, 255, 139, 61, 116, 12, 0, 0, 72, 141, 21, 205, 13, 0, 0, 72, 141, 53, 21, 9, 0, 0, 232, 84, 254, 255, 255, 139, 61, 91, 12, 0, 0, 72, 141, 21, 236, 13, 0, 0, 72, 141, 53, 19, 9, 0, 0, 232, 59, 254, 255, 255, 139, 61, 66, 12, 0, 0, 72, 141, 21, 203, 13, 0, 0, 88, 72, 141, 53, 18, 9, 0, 0, 233, 33, 254, 255, 255, 83, 69, 49, 201, 69, 49, 192, 49, 201, 49, 210, 49, 246, 72, 141, 61, 15, 9, 0, 0, 255, 21, 180, 12, 0, 0, 72, 141, 21, 253, 13, 0, 0, 72, 141, 53, 19, 9, 0, 0, 137, 195, 137, 199, 232, 240, 253, 255, 255, 137, 223, 72, 141, 21, 124, 15, 0, 0, 72, 141, 53, 1, 9, 0, 0, 232, 219, 253, 255, 255, 137, 223, 72, 141, 21, 247, 13, 0, 0, 72, 141, 53, 241, 8, 0, 0, 232, 198, 253, 255, 255, 137, 223, 72, 141, 21, 82, 14, 0, 0, 72, 141, 53, 227, 8, 0, 0, 232, 177, 253, 255, 255, 137, 223, 72, 141, 21, 221, 14, 0, 0, 72, 141, 53, 214, 8, 0, 0, 232, 156, 253, 255, 255, 137, 223, 72, 141, 21, 136, 14, 0, 0, 72, 141, 53, 202, 8, 0, 0, 232, 135, 253, 255, 255, 137, 223, 72, 141, 21, 99, 13, 0, 0, 72, 141, 53, 188, 8, 0, 0, 232, 114, 253, 255, 255, 137, 223, 72, 141, 21, 14, 14, 0, 0, 72, 141, 53, 174, 8, 0, 0, 232, 93, 253, 255, 255, 137, 223, 72, 141, 21, 25, 13, 0, 0, 72, 141, 53, 160, 8, 0, 0, 232, 72, 253, 255, 255, 137, 223, 72, 141, 21, 204, 13, 0, 0, 72, 141, 53, 146, 8, 0, 0, 232, 51, 253, 255, 255, 137, 223, 72, 141, 21, 119, 13, 0, 0, 72, 141, 53, 133, 8, 0, 0, 232, 30, 253, 255, 255, 137, 223, 72, 141, 21, 202, 13, 0, 0, 72, 141, 53, 119, 8, 0, 0, 232, 9, 253, 255, 255, 137, 223, 72, 141, 21, 117, 14, 0, 0, 72, 141, 53, 106, 8, 0, 0, 232, 244, 252, 255, 255, 137, 223, 72, 141, 21, 16, 14, 0, 0, 72, 141, 53, 92, 8, 0, 0, 232, 223, 252, 255, 255, 137, 223, 72, 141, 21, 91, 13, 0, 0, 72, 141, 53, 78, 8, 0, 0, 232, 202, 252, 255, 255, 137, 223, 72, 141, 21, 254, 13, 0, 0, 72, 141, 53, 65, 8, 0, 0, 232, 181, 252, 255, 255, 137, 223, 72, 141, 21, 137, 12, 0, 0, 72, 141, 53, 52, 8, 0, 0, 232, 160, 252, 255, 255, 137, 223, 72, 141, 21, 68, 13, 0, 0, 72, 141, 53, 40, 8, 0, 0, 232, 139, 252, 255, 255, 137, 223, 72, 141, 21, 255, 13, 0, 0, 72, 141, 53, 26, 8, 0, 0, 232, 118, 252, 255, 255, 137, 223, 72, 141, 21, 138, 12, 0, 0, 72, 141, 53, 12, 8, 0, 0, 232, 97, 252, 255, 255, 137, 223, 72, 141, 21, 189, 12, 0, 0, 72, 141, 53, 255, 7, 0, 0, 232, 76, 252, 255, 255, 137, 223, 72, 141, 21, 16, 13, 0, 0, 72, 141, 53, 241, 7, 0, 0, 232, 55, 252, 255, 255, 137, 223, 72, 141, 21, 3, 13, 0, 0, 72, 141, 53, 228, 7, 0, 0, 232, 34, 252, 255, 255, 137, 223, 72, 141, 21, 70, 12, 0, 0, 72, 141, 53, 206, 7, 0, 0, 232, 13, 252, 255, 255, 137, 223, 72, 141, 21, 89, 13, 0, 0, 72, 141, 53, 192, 7, 0, 0, 232, 248, 251, 255, 255, 137, 223, 72, 141, 21, 84, 13, 0, 0, 72, 141, 53, 179, 7, 0, 0, 232, 227, 251, 255, 255, 137, 223, 72, 141, 21, 87, 12, 0, 0, 72, 141, 53, 163, 7, 0, 0, 232, 206, 251, 255, 255, 137, 223, 72, 141, 21, 154, 11, 0, 0, 72, 141, 53, 150, 7, 0, 0, 232, 185, 251, 255, 255, 137, 223, 72, 141, 21, 229, 11, 0, 0, 72, 141, 53, 138, 7, 0, 0, 232, 164, 251, 255, 255, 137, 223, 72, 141, 21, 96, 12, 0, 0, 72, 141, 53, 128, 7, 0, 0, 232, 143, 251, 255, 255, 137, 223, 72, 141, 21, 35, 12, 0, 0, 72, 141, 53, 114, 7, 0, 0, 232, 122, 251, 255, 255, 137, 223, 72, 141, 21, 118, 12, 0, 0, 72, 141, 53, 99, 7, 0, 0, 232, 101, 251, 255, 255, 137, 223, 72, 141, 21, 201, 11, 0, 0, 72, 141, 53, 79, 7, 0, 0, 232, 80, 251, 255, 255, 137, 223, 72, 141, 21, 20, 11, 0, 0, 72, 141, 53, 63, 7, 0, 0, 232, 59, 251, 255, 255, 137, 223, 72, 141, 21, 23, 12, 0, 0, 72, 141, 53, 50, 7, 0, 0, 232, 38, 251, 255, 255, 137, 223, 72, 141, 21, 98, 11, 0, 0, 72, 141, 53, 23, 7, 0, 0, 232, 17, 251, 255, 255, 137, 223, 72, 141, 21, 77, 12, 0, 0, 72, 141, 53, 10, 7, 0, 0, 232, 252, 250, 255, 255, 137, 223, 72, 141, 21, 8, 12, 0, 0, 72, 141, 53, 238, 6, 0, 0, 232, 231, 250, 255, 255, 137, 223, 72, 141, 21, 75, 12, 0, 0, 72, 141, 53, 232, 6, 0, 0, 232, 210, 250, 255, 255, 137, 223, 72, 141, 21, 246, 11, 0, 0, 72, 141, 53, 218, 6, 0, 0, 232, 189, 250, 255, 255, 137, 223, 72, 141, 21, 161, 11, 0, 0, 72, 141, 53, 206, 6, 0, 0, 232, 168, 250, 255, 255, 137, 223, 72, 141, 21, 236, 11, 0, 0, 72, 141, 53, 195, 6, 0, 0, 232, 147, 250, 255, 255, 137, 223, 72, 141, 21, 231, 10, 0, 0, 72, 141, 53, 186, 6, 0, 0, 232, 126, 250, 255, 255, 137, 223, 72, 141, 21, 146, 11, 0, 0, 72, 141, 53, 172, 6, 0, 0, 232, 105, 250, 255, 255, 137, 223, 72, 141, 21, 117, 10, 0, 0, 72, 141, 53, 159, 6, 0, 0, 232, 84, 250, 255, 255, 137, 223, 72, 141, 21, 80, 10, 0, 0, 72, 141, 53, 146, 6, 0, 0, 232, 63, 250, 255, 255, 137, 223, 72, 141, 21, 195, 11, 0, 0, 72, 141, 53, 135, 6, 0, 0, 232, 42, 250, 255, 255, 137, 223, 72, 141, 21, 14, 10, 0, 0, 72, 141, 53, 122, 6, 0, 0, 232, 21, 250, 255, 255, 137, 223, 72, 141, 21, 1, 10, 0, 0, 72, 141, 53, 109, 6, 0, 0, 232, 0, 250, 255, 255, 137, 223, 72, 141, 21, 124, 11, 0, 0, 72, 141, 53, 98, 6, 0, 0, 232, 235, 249, 255, 255, 137, 223, 72, 141, 21, 87, 10, 0, 0, 72, 141, 53, 86, 6, 0, 0, 232, 214, 249, 255, 255, 137, 223, 72, 141, 21, 218, 9, 0, 0, 72, 141, 53, 71, 6, 0, 0, 232, 193, 249, 255, 255, 137, 223, 72, 141, 21, 149, 10, 0, 0, 72, 141, 53, 62, 6, 0, 0, 232, 172, 249, 255, 255, 137, 223, 72, 141, 21, 96, 10, 0, 0, 72, 141, 53, 47, 6, 0, 0, 232, 151, 249, 255, 255, 137, 223, 72, 141, 21, 235, 10, 0, 0, 72, 141, 53, 32, 6, 0, 0, 232, 130, 249, 255, 255, 137, 223, 72, 141, 21, 206, 9, 0, 0, 72, 141, 53, 18, 6, 0, 0, 232, 109, 249, 255, 255, 137, 223, 72, 141, 21, 97, 10, 0, 0, 72, 141, 53, 3, 6, 0, 0, 232, 88, 249, 255, 255, 137, 223, 72, 141, 21, 92, 10, 0, 0, 72, 141, 53, 244, 5, 0, 0, 232, 67, 249, 255, 255, 137, 223, 91, 72, 141, 21, 118, 9, 0, 0, 72, 141, 53, 229, 5, 0, 0, 233, 45, 249, 255, 255, 72, 49, 192, 73, 137, 202, 15, 5, 114, 1, 195, 72, 131, 61, 167, 7, 0, 0, 0, 116, 24, 80, 255, 21, 158, 7, 0, 0, 89, 137, 8, 72, 199, 192, 255, 255, 255, 255, 72, 199, 194, 255, 255, 255, 255, 195, 69, 110, 97, 98, 108, 101, 100, 32, 98, 114, 111, 119, 115, 101, 114, 33, 0, 108, 105, 98, 107, 101, 114, 110, 101, 108, 46, 115, 112, 114, 120, 0, 108, 105, 98, 107, 101, 114, 110, 101, 108, 95, 119, 101, 98, 46, 115, 112, 114, 120, 0, 108, 105, 98, 107, 101, 114, 110, 101, 108, 95, 115, 121, 115, 46, 115, 112, 114, 120, 0, 95, 95, 115, 116, 97, 99, 107, 95, 99, 104, 107, 95, 103, 117, 97, 114, 100, 0, 95, 95, 115, 116, 97, 99, 107, 95, 99, 104, 107, 95, 102, 97, 105, 108, 0, 95, 95, 101, 114, 114, 111, 114, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 69, 114, 114, 111, 114, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 76, 111, 97, 100, 83, 116, 97, 114, 116, 77, 111, 100, 117, 108, 101, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 65, 108, 108, 111, 99, 97, 116, 101, 68, 105, 114, 101, 99, 116, 77, 101, 109, 111, 114, 121, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 77, 97, 112, 68, 105, 114, 101, 99, 116, 77, 101, 109, 111, 114, 121, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 71, 101, 116, 68, 105, 114, 101, 99, 116, 77, 101, 109, 111, 114, 121, 83, 105, 122, 101, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 83, 116, 97, 116, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 79, 112, 101, 110, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 82, 101, 97, 100, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 76, 115, 101, 101, 107, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 67, 108, 111, 115, 101, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 83, 108, 101, 101, 112, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 85, 115, 108, 101, 101, 112, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 71, 101, 116, 116, 105, 109, 101, 111, 102, 100, 97, 121, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 71, 101, 116, 80, 114, 111, 99, 101, 115, 115, 84, 105, 109, 101, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 71, 101, 116, 67, 117, 114, 114, 101, 110, 116, 67, 112, 117, 0, 115, 121, 115, 99, 116, 108, 0, 115, 121, 115, 99, 116, 108, 98, 121, 110, 97, 109, 101, 0, 115, 121, 115, 97, 114, 99, 104, 0, 101, 120, 101, 99, 118, 101, 0, 112, 116, 104, 114, 101, 97, 100, 95, 115, 101, 108, 102, 0, 112, 116, 104, 114, 101, 97, 100, 95, 115, 101, 116, 97, 102, 102, 105, 110, 105, 116, 121, 95, 110, 112, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 67, 114, 101, 97, 116, 101, 69, 113, 117, 101, 117, 101, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 68, 101, 108, 101, 116, 101, 69, 113, 117, 101, 117, 101, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 65, 100, 100, 85, 115, 101, 114, 69, 118, 101, 110, 116, 0, 115, 99, 101, 75, 101, 114, 110, 101, 108, 65, 100, 100, 82, 101, 97, 100, 69, 118, 101, 110, 116, 0, 103, 101, 116, 117, 105, 100, 0, 103, 101, 116, 103, 105, 100, 0, 103, 101, 116, 112, 105, 100, 0, 115, 101, 116, 117, 105, 100, 0, 115, 101, 116, 103, 105, 100, 0, 115, 101, 116, 114, 101, 117, 105, 100, 0, 115, 101, 116, 114, 101, 103, 105, 100, 0, 47, 115, 121, 115, 116, 101, 109, 47, 99, 111, 109, 109, 111, 110, 47, 108, 105, 98, 47, 108, 105, 98, 83, 99, 101, 83, 121, 115, 85, 116, 105, 108, 46, 115, 112, 114, 120, 0, 47, 115, 121, 115, 116, 101, 109, 47, 99, 111, 109, 109, 111, 110, 47, 108, 105, 98, 47, 108, 105, 98, 83, 99, 101, 83, 121, 115, 116, 101, 109, 83, 101, 114, 118, 105, 99, 101, 46, 115, 112, 114, 120, 0, 115, 99, 101, 83, 121, 115, 85, 116, 105, 108, 83, 101, 110, 100, 83, 121, 115, 116, 101, 109, 78, 111, 116, 105, 102, 105, 99, 97, 116, 105, 111, 110, 87, 105, 116, 104, 84, 101, 120, 116, 0, 115, 99, 101, 83, 121, 115, 116, 101, 109, 83, 101, 114, 118, 105, 99, 101, 76, 97, 117, 110, 99, 104, 87, 101, 98, 66, 114, 111, 119, 115, 101, 114, 0, 37, 115, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 67, 114, 101, 97, 116, 101, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 69, 120, 105, 116, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 68, 101, 116, 97, 99, 104, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 74, 111, 105, 110, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 89, 105, 101, 108, 100, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 83, 101, 108, 102, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 67, 97, 110, 99, 101, 108, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 77, 117, 116, 101, 120, 73, 110, 105, 116, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 77, 117, 116, 101, 120, 68, 101, 115, 116, 114, 111, 121, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 77, 117, 116, 101, 120, 76, 111, 99, 107, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 77, 117, 116, 101, 120, 84, 114, 121, 108, 111, 99, 107, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 77, 117, 116, 101, 120, 84, 105, 109, 101, 100, 108, 111, 99, 107, 0, 115, 99, 101, 80, 116, 104, 114, 101, 97, 100, 77, 117, 116, 101, 120, 85, 110, 108, 111, 99, 107, 0, 108, 105, 98, 83, 99, 101, 76, 105, 98, 99, 73, 110, 116, 101, 114, 110, 97, 108, 46, 115, 112, 114, 120, 0, 109, 97, 108, 108, 111, 99, 0, 102, 114, 101, 101, 0, 99, 97, 108, 108, 111, 99, 0, 114, 101, 97, 108, 108, 111, 99, 0, 109, 101, 109, 97, 108, 105, 103, 110, 0, 109, 101, 109, 115, 101, 116, 0, 109, 101, 109, 99, 112, 121, 0, 109, 101, 109, 99, 109, 112, 0, 115, 116, 114, 99, 112, 121, 0, 115, 116, 114, 110, 99, 112, 121, 0, 115, 116, 114, 99, 97, 116, 0, 115, 116, 114, 110, 99, 97, 116, 0, 115, 116, 114, 108, 101, 110, 0, 115, 116, 114, 99, 109, 112, 0, 115, 116, 114, 110, 99, 109, 112, 0, 115, 112, 114, 105, 110, 116, 102, 0, 115, 110, 112, 114, 105, 110, 116, 102, 0, 115, 115, 99, 97, 110, 102, 0, 115, 116, 114, 99, 104, 114, 0, 115, 116, 114, 114, 99, 104, 114, 0, 115, 116, 114, 115, 116, 114, 0, 115, 116, 114, 100, 117, 112, 0, 114, 105, 110, 100, 101, 120, 0, 105, 115, 100, 105, 103, 105, 116, 0, 97, 116, 111, 105, 0, 115, 116, 114, 108, 99, 112, 121, 0, 115, 116, 114, 101, 114, 114, 111, 114, 0, 95, 71, 101, 116, 112, 99, 116, 121, 112, 101, 0, 95, 83, 116, 111, 117, 108, 0, 98, 99, 111, 112, 121, 0, 115, 114, 97, 110, 100, 0, 97, 115, 99, 116, 105, 109, 101, 0, 97, 115, 99, 116, 105, 109, 101, 95, 114, 0, 103, 109, 116, 105, 109, 101, 0, 103, 109, 116, 105, 109, 101, 95, 115, 0, 108, 111, 99, 97, 108, 116, 105, 109, 101, 0, 108, 111, 99, 97, 108, 116, 105, 109, 101, 95, 114, 0, 109, 107, 116, 105, 109, 101, 0, 111, 112, 101, 110, 100, 105, 114, 0, 114, 101, 97, 100, 100, 105, 114, 0, 114, 101, 97, 100, 100, 105, 114, 95, 114, 0, 116, 101, 108, 108, 100, 105, 114, 0, 115, 101, 101, 107, 100, 105, 114, 0, 114, 101, 119, 105, 110, 100, 100, 105, 114, 0, 99, 108, 111, 115, 101, 100, 105, 114, 0, 100, 105, 114, 102, 100, 0, 103, 101, 116, 112, 114, 111, 103, 110, 97, 109, 101, 0, 102, 111, 112, 101, 110, 0, 102, 114, 101, 97, 100, 0, 102, 119, 114, 105, 116, 101, 0, 102, 115, 101, 101, 107, 0, 102, 116, 101, 108, 108, 0, 102, 99, 108, 111, 115, 101, 0, 102, 112, 114, 105, 110, 116, 102, 0, 47, 108, 105, 98, 54, 52, 47, 108, 100, 45, 108, 105, 110, 117, 120, 45, 120, 56, 54, 45, 54, 52, 46, 115, 111, 46, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 245, 254, 255, 111, 0, 0, 0, 0, 168, 23, 32, 38, 9, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 160, 23, 32, 38, 9, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 136, 23, 32, 38, 9, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 251, 255, 255, 111, 0, 0, 0, 0, 1, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
}