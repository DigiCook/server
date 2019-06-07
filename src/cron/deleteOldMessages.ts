import moment = require("moment");
import { MessageRepository } from "../repository/MessageRepository";

async function deleteOldMessages() {
  try {
    const allMessages: any = await MessageRepository.getAll();
    const messagesToDelete = [];

    allMessages.map((message) => {
      console.log(parseInt(moment(message.createdAt).format("X"), 10));
      console.log(parseInt(moment().format("X"), 10) - (2 * 24 * 60 * 60));
      if (parseInt(moment(message.createdAt).format("X"), 10) < parseInt(moment().format("X"), 10) - (2 * 24 * 60 * 60)) {
        messagesToDelete.push(message);
      }
    });

    console.info("[Cron:deleteOldMessages] Delete messages", messagesToDelete.length);

    await Promise.all(messagesToDelete.map(async (message) => {
      try {
        await MessageRepository.delete(message);
      } catch (error) {
        console.error("[Cron:deleteOldMessages] Delete", error);
      }
    }))

  } catch (error) {
    console.error("[Cron:deleteOldMessages]", error);
  }

  process.exit(0);
}

deleteOldMessages();
