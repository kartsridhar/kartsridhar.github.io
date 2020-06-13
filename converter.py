import imageio
import os

clip = os.path.abspath('static/computer-vision-results.mp4')

def convert(inputPath, targetFormat):
    outputPath = os.path.splitext(inputPath)[0] + targetFormat

    reader = imageio.get_reader(inputPath)
    fps = reader.get_meta_data()['fps']

    writer = imageio.get_writer(outputPath, fps=fps)

    for frames in reader:
        writer.append_data(frames)
    
    writer.close()

convert(clip, '.gif')