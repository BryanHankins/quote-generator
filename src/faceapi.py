from thispersondoesnotexist import get_online_person
picture = get_online_person()  # bytes representation of the image

# Save to a file
from thispersondoesnotexist import save_picture
save_picture(picture, "a_beautiful_person.jpeg")
# If no filename is provided, one will be generated using the checksum of the picture
save_picture(picture)

